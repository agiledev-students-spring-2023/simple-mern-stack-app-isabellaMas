import { Link } from 'react-router-dom'
import './Home.css'
import image from './isabellaPic.png'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About Us!</h1>
      <img src={image} alt="Isabella Masiero"></img>
      <p>The creator of this specific page is Isabella Masiero, pictured above. Isabella is a senior at New York University<br></br>
        planning to graduating in May of 2023 with a major in Computer Science and a minor in Web Programming and Applications.<br></br>
        Isabella was born in Brazil in 2001 and moved to the United States with her family when she was two years old. She has since<br></br>
        lived in New Jersey at her fathers house before moving to New York for school. Currently, she lives with her best friend in<br></br>
        an apartment in the East Village.
      </p>
      <p>After graduation Isabella intends to use the skills she has learned to start her career at Willow Tree a full-service<br></br>
        digital product consultancy. She is very excited for this opportunity because she will be working as a front-end software engineer.<br></br>
        Isabella alongside her computer science major has also been taking many graphic design classes and hopes to integrate her computer<br></br>
        work and design skills at her upcoming job. 
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
