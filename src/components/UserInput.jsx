import React from 'react'

const UserInput = ({ userInput, onChange }) => {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="text" value={userInput.initialInvestment} required onChange={(e) => onChange('initialInvestment', e.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="text" value={userInput.annualInvestment} required onChange={(e) => onChange('annualInvestment', e.target.value)} />
                </p>
            </div>

            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input type="text" value={userInput.expectedReturn} required onChange={(e) => onChange('expectedReturn', e.target.value)} />
                </p>
                <p>
                    <label>Duaration</label>
                    <input type="text" value={userInput.duration} required onChange={(e) => onChange('duration', e.target.value)} />
                </p>
            </div>
        </section>
    )
}

export default UserInput
