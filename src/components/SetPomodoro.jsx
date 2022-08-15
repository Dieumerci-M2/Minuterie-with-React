
import { useContext, useState } from 'react';
import Button from './Button';
import { settingContext } from '../context/settings';

const SetPomodoro = () => {
    const {updateExecute} = useContext{settingContext}
    const [newTimer, setNewTimer] = useState ({
        work : 0.3,
        short : 0.1,
        long : 1,
        active : 'work'

    })
    const handleChange = input => {
        const {name, value} = input.target;

        if(name === 'work'){
            setNewTimer({
                ...newTimer,
                work : parseInt(value)
            })
        }
        else if(name === 'shortBreak'){
            setNewTimer({
                ...newTimer,
                short : parseInt(value)
            })
        }
        else if(name === 'longBreak'){
            setNewTimer({
                ...newTimer,
                long : parseInt(value)
            }) 
        }
    } 
    const handleSubmit = (e)=>{
      e.preventDefault();
      updateExecute(newTimer)
    }
  return (
    <div className='form-container'>
        <form noValidate>
            <div className='input-wrapper'>
                <input className='input' name='work' onChange={handleChange} value = {newTimer.work}/>
                <input className='input' name='ShortBreak' onChange={handleChange} value = {newTimer.short}/>
                <input className='input' name='LongBreak' onChange={handleChange} value = {newTimer.long}/>

            </div>
        </form>
        <Button title='Set Timer' _callback={handleSubmit}/>
    </div>
  )
}

export default SetPomodoro;