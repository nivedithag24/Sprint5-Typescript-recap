import './App.css';
import { Greet } from './ts_compo/greet';
import { Personlistparent } from './ts_compo/personlistparent';
import { Personnameobj } from './ts_compo/personnameobj';
import { Status } from './ts_compo/status';
import { Heading } from './ts_compo/heading';
import { Oscar } from './ts_compo/oscar';
import { Button } from './ts_compo/button';
import { Input } from './ts_compo/input';
import { Container } from './ts_compo/container';
import { Loggedin } from './ts_compo/loggedin';
import {User} from './ts_compo/user'
import { Counter } from './ts_compo/counter';
import { ThemeContextProvider } from './ts_compo/context/themecontext';
import { Box } from './ts_compo/context/box';
import { UserContextProvider } from './ts_compo/context/usercontextone';
import { Usercontext } from './ts_compo/context/usercontext';
import { Domref } from './ts_compo/ref/domref';
import { Mutableref } from './ts_compo/ref/mutableref';
import { Counterclass } from './ts_compo/class/counterclass';
import { Private } from './ts_compo/auth/private';
import { Profile } from './ts_compo/auth/profile';
import { Randomnumbers } from './ts_compo/restriction/randomnumbers';
import { Toast } from './ts_compo/templiterals/toast';
import { Custombutton } from './ts_compo/html/button';
// import { Input } from './ts_compo/input';
import { Text } from './ts_compo/polymorphic/text';
function App() {
  
  return (
    <div className="App">
     {/* <Greet name='Stark' messageCount={20} isLoggedIn={true}/> */}
     {/* <Greet name='Stark' isLoggedIn={true}/>  */}
     {/* <Personnameobj /> */}
     {/* <Personlistparent /> */}

{/* 
     <Status status='loading'/>
     <Status status='success'/>
     <Status status='error'/> */}


{/* <Heading>
  Placeholder text
</Heading> */}

{/* <Oscar>
  <Heading>Oscar goes to Leanardo Dicpario!</Heading>
</Oscar> */}

{/* <Button handleClick={()=>{ console.log('Button clicked')}} /> */}
{/* <Button handleClick={(event)=>{ console.log('Button clicked',event)}} /> */}
{/* <Button handleClick={(event,id)=>{ console.log('Button clicked',event,id)}} /> */}


{/* <Input value='' handleChange={(event)=>console.log(event)} /> */}

{/* <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}

{/* <Loggedin /> */}

{/* <User /> */}

{/* <Counter /> */}

{/* <ThemeContextProvider>
  <Box />
</ThemeContextProvider> */}


{/* <UserContextProvider>
  <Usercontext />
</UserContextProvider> */}

{/* <Domref /> */}

{/* <Mutableref /> */}

{/* <Counterclass message='The count value is'/> */}

{/* <Private isLoggedIn={true} component={Profile}/> */}

{/* <Randomnumbers value={10} isPositive /> */}

{/* <Toast position='center' /> */}

{/* <Custombutton variant='primary' onClick={()=>console.log('clicked')}>Primary Button</Custombutton> */}
{/* <Input /> */}


<Text as="h1" size='lg'>Heading</Text>
<Text as='p' size='md'>Paragraph</Text>
<Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>














    </div>
  );
}

export default App;











