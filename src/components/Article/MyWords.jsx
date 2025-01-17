import React from 'react';
import './MyWords.css';
import { MyWordsButton } from './MyWordsButton';

//Gets the img, tags, name, description from mywords.json file
export const MyWordsCard = ({ mywords }) => {
    return (

        <div className='MyWords-container'>
            <div className="MyWords-item">
                <img className="MyWords-img" src={mywords.image} width={
                    564} height={340} alt={`Image from article: ${mywords.name}`} />

                <div className="MyWords-description">
                    <div className="mywords-tags">

                        {/*maps over the tags */}
                        {mywords.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <h2 className="MyWords-title">{mywords.name}</h2>
                    <p>{mywords.description}</p>
                </div>
                <div className="project-buttons">
                    <MyWordsButton mywords={mywords} />

                </div>
            </div>
        </div>
    );
};

