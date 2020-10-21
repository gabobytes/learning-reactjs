import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercices extends React.Component {
    render() {
        return (
            <div>
                <Welcome
                    username="Gabo"
                />
                <Card
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    leftColor="#A74CF2"
                    rightColor="#617BFB"

                />
            </div>


        )
    }
}

export default Exercices