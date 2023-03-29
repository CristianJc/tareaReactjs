import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import NofoundPage from "./pages/404/NofoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import TaskListComponent from "./Components/container/task_list";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import ProfilePage from "./pages/profile/profilePage";
import LoginPage from "./pages/auth/LoginPage";
import StatePage from "./pages/home/StatePage";

 function AppRoutingOne() {
  
  let logged =  false;

  let taskList = [
    {
      id:1,
      name:'Task 1',
      description: 'My fist task'
    },
    {
      id:2,
      name:'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged= localStorage.getItem('credentials');
    console.log("User logged?", logged);
   
  }, []);
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> | Home | </Link>
          <Link to='/tasks'> | List Tasks | </Link>
          <Link to='/about'> | About | </Link>
          <Link to='/faqs'> | FAQs | </Link>
          <Link to='/task/1'> | Task 1 | </Link>
          <Link to='/task/2'> | Task 2 | </Link>
          <Link to='/any404'> | Ruta Inesistente | </Link>
          <Link to='/login'> | Login | </Link>
        </aside>
        <main>
         <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/online-state' component={ StatePage } />

          <Route path='/tasks' component={ TaskListComponent } />
          <Route path='/profile' component={ ProfilePage } >
            {
              logged ? <ProfilePage /> 
              :
              ()=>{
                alert("You must be logged in. Redirecting to login...");
               return <Redirect to='/login' />
              }
              

            }
          </Route>
          <Route path='/(about|faqs)' component={ AboutPage } />
          <Route  exact path='/task/:id' render={({match})=>(<TaskDetailPage task={taskList[match.params.id-1]}/>)}  />
          <Route path='/login' component={ LoginPage } > 
          {
              logged ? ()=>{
                alert("You are logged in. Redirecting to home...");
               return <Redirect to='/' /> }
              :
              ()=>{
              
               return (<LoginPage> </LoginPage> )
              }
              
              

            }
          </Route>
          <Route  component={ NofoundPage } />

         </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
