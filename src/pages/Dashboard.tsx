import React, { useState } from 'react';
import { Calendar, Clock, Users, UserCheck, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Attendance {
  id: string;
  name: string;
  date: string;
  timeIn: string;
  timeOut: string;
  status: 'present' | 'absent' | 'late';
}

export function Dashboard() {
  const { signOut, user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [attendanceRecords, setAttendanceRecords] = useState<Attendance[]>([
    {
      id: '1',
      name: 'Peyanshu verma,
      date: '2003-06-10',
      timeIn: '09:00',
      timeOut: '17:00',
      status: 'present'
    },
    {
      id: '2',
      name: 'Jane Smith',
      date: '2024-03-14',
      timeIn: '09:15',
      status: 'late',
      timeOut: '17:30'
    }
  ]);

  const [newAttendance, setNewAttendance] = useState({
    name: '',
    timeIn: '',
    status: 'present' as const
  });

  const handleAttendanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const attendance: Attendance = {
      id: Math.random().toString(36).substr(2, 9),
      name: newAttendance.name,
      date: new Date().toISOString().split('T')[0],
      timeIn: newAttendance.timeIn,
      timeOut: '',
      status: newAttendance.status
    };
    setAttendanceRecords([...attendanceRecords, attendance]);
    setNewAttendance({ name: '', timeIn: '', status: 'present' });
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <UserCheck className="w-8 h-8 text-blue-600" />
            AttendanceHub
          </h1>
          <p className="mt-2 text-sm text-gray-600">{user?.email}</p>
        </div>
        <nav className="mt-6">
          {[
            { id: 'dashboard', icon: Calendar, label: 'Dashboard' },
            { id: 'employees', icon: Users, label: 'Employees' },
            { id: 'reports', icon: BarChart3, label: 'Reports' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Attendance Dashboard</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                {new Date().toLocaleTimeString()}
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Present Today', value: '45', color: 'bg-green-100 text-green-600' },
              { label: 'Absent Today', value: '3', color: 'bg-red-100 text-red-600' },
              { label: 'Late Arrivals', value: '2', color: 'bg-yellow-100 text-yellow-600' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-lg p-6 flex flex-col`}
              >
                <span className="text-sm font-medium">{stat.label}</span>
                <span className="text-3xl font-bold mt-2">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* New Attendance Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Mark Attendance</h3>
            <form onSubmit={handleAttendanceSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={newAttendance.name}
                onChange={(e) => setNewAttendance({ ...newAttendance, name: e.target.value })}
                placeholder="Employee Name"
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="time"
                value={newAttendance.timeIn}
                onChange={(e) => setNewAttendance({ ...newAttendance, timeIn: e.target.value })}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={newAttendance.status}
                onChange={(e) => setNewAttendance({ ...newAttendance, status: e.target.value as 'present' | 'absent' | 'late' })}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="late">Late</option>
              </select>
              <button
                type="submit"
                className="md:col-span-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Mark Attendance
              </button>
            </form>
          </div>

          {/* Attendance Records */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Today's Attendance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time In</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Out</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{record.timeIn}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{record.timeOut || '-'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          record.status === 'present'
                            ? 'bg-green-100 text-green-800'
                            : record.status === 'absent'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}