import DialogListItem from './DialogListItem/DialogListItem';
import Messages from './Messages/Messages';
import './Dialogs.css';
import InvertMessage from './Messages/InvertMessage/InvertMessage';
import MessageForm from './MessageForm/MessageForm';
import { addPost } from '../../state/state';

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogListItem state={dialog} />
  ));

  let messageElements = props.state.messagesData.map((mail) => {
    let j = [2, 5, 7, 3, 9];
    for (let i = 0; i < j.length; i++) {
      if (j[i] === mail.id) {
        return <InvertMessage state={mail} />;
      }
    }
    return <Messages state={mail} />;
  });
  return (
    <div className='dialogs'>
      <h2 className='main-page__h2'>DIALOGS</h2>
      <div className='dialogs-wrapper'>
        <div className='usersList-conteiner'>
          <div className='usersList__inner'>
            <ul>{dialogElements}</ul>
          </div>
        </div>
        <div className='messages-conteiner'>
          <MessageForm
            newMessageText={props.state.newMessageText}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />
          <div className='messages-conteiner__small'>{messageElements}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
