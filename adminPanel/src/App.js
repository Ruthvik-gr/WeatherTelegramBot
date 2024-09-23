import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ApiKey, setApiKey] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchApiKey();
    fetchUsers();
  }, []);

  const handleClick = () => {
    window.open("https://t.me/Ruthviks_weather_Bot", '_blank', 'noopener,noreferrer');
  };

  const fetchApiKey = () => {
    axios.get('https://weathertelegrambot-production.up.railway.app/admin/api-key')
      .then((response) => {
        setApiKey(response.data);
      })
      .catch((error) => {
        console.error('Error fetching API key:', error);
      });
  };


  const updateApiKey = () => {
    const newApiKey = prompt('Enter the new API key:');
    if (newApiKey) {
      axios.post('https://weathertelegrambot-production.up.railway.app/admin/api-key', { key: newApiKey })
        .then((response) => {
          alert(response.data);
          fetchApiKey();
          console.log(ApiKey)
        })
        .catch((error) => {
          console.error('Error updating API key:', error);
        });
    }
  };

  const deleteUser = (chatId) => {
    axios.delete(`https://weathertelegrambot-production.up.railway.app/users/${chatId}`)
      .then((response) => {
        alert(response.data.message);
        fetchUsers();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const fetchUsers = () => {
    axios.get('https://weathertelegrambot-production.up.railway.app/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Telegram WeatherBot Admin Panel</h1>

        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md mb-6 flex justify-center items-center">
          <button onClick={handleClick} className="mt-4 ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Go to Weather Bot
          </button>

          <button onClick={updateApiKey} className="mt-4 ml-4 px-5 py-2 ms-40 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
            Update API Key
          </button>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-700">Active Users</h2>
          <table className="min-w-full mt-4">
            <thead>

              <tr className="bg-gray-200 shadow-md ">
                <th className="py-3 px-4 text-left text-gray-600">Username</th>
                <th className="py-3 px-4 text-left text-gray-600">Chat ID</th>
                <th className="py-3 px-4 text-left text-gray-600">Action</th>
              </tr>

            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.chatId} className="border-b hover:bg-gray-100 transition duration-200">
                  <td className="py-3 px-4 text-gray-800">{user.username}</td>
                  <td className="py-3 px-4 text-gray-800">{user.chatId}</td>
                  <td className="py-3 px-4">
                    <button onClick={() => deleteUser(user.chatId)} className="text-red-500 hover:text-red-700 transition duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;


