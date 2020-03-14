import React from 'react';

const Skills = () => {
    return (
        <div className='skills'>
            <h1>skill sets</h1>
            <div className='list'>
                <div className='javascript'> Javascript
                 <img src='data:image/jpeg;base64,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' alt='js'/>
                </div>
                <div className='react'> React 
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='react'/>
                </div>
                <div className='HTML'> HTML
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='html'/>
                </div>
                 <div className='css'> CSS 
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='css'/>
                </div>
                 <div className='postgres'> PostgreSQL
                    <img src='https://apprecs.org/ios/images/app-icons/256/fd/390298877.jpg' alt='postgres'/>
                </div>
                 <div className='git'> GIT
                    <img src='https://github.githubassets.com/images/modules/open_graph/github-mark.png' alt='git'/>
                </div>
                 {/* <div>
                    <img src=''/>
                </div>
                 <div>
                    <img src=''/>
                </div> */}
             </div>       
           
        </div>
    )
}

export default Skills;