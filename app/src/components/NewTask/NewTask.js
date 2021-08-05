import Section from '../UI/Section';
import TaskForm from './TaskForm';
import url_firebase  from '../../url_firebase';
import useRequest from '../../hooks/useRequest';


const NewTask = (props) => {
   
   const {isLoading, error, sendRequest: sendTaskRequest} = useRequest();

   const createdTask = (taskText, taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
   }

   const enterTaskHandler = async (taskText) => {
      sendTaskRequest(
         {
            url: url_firebase,
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: { text: taskText },

         }, 
         createdTask.bind(null, taskText)
      );
   };

   return (
      <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
      </Section>
   );
   };

   export default NewTask;
