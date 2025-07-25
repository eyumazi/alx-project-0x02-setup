import React from 'react'
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
const About = () => {
  return (
    <>    
    <div>about</div>
    <Button label="Go Back" onClick={() => {}} />
    <Button label="Click Me" onClick={() => alert('Button Clicked!')} className="bg-blue-500 text-white" />
    <Button label="Submit" type="submit" className="bg-green-500 text-white" />
    <Button label="Reset" type="reset" className="bg-red-500 text-white" />
    </>
  )
}
export default About;
