import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import '../../index.css';
import useLogin from '@/hooks/useLogin';

const LoginForm = ({ onToggle }) => {
  const {
    formData,
    handleChange,
    handleSubmit,
    errorMessage,
    successMessage,
  } = useLogin(); // Use the custom hook

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: 'black' }}>
        Diabetes Tracker
      </h1>
      <Card className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}> {/* Set onSubmit to handleSubmit */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              name="email" // Ensure this matches the state in useLogin
              placeholder="johndoe@gmail.com"
              className="w-full"
              value={formData.email} // Bind to formData from useLogin
              onChange={handleChange} // Use handleChange from the hook
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              name="password" // Ensure this matches the state in useLogin
              placeholder="Enter your password"
              className="w-full"
              value={formData.password} // Bind to formData from useLogin
              onChange={handleChange} // Use handleChange from the hook
            />
          </div>
         
          <div className="mb-4">
            Don’t have an account? 
            <a href="#" onClick={onToggle} className="text-blue-500 underline ml-1">Register Now</a>
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Card>
    </>
  );
};

export default LoginForm;
