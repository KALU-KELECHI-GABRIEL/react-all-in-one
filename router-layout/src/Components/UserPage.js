import './user_page_styles.scss';

const UserPage = ({  classNamees }) => {  
    return (  
        <div className="row">
        <div className="column" style={{backgroundColor: '#aaa' }}>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className="column" style={{backgroundColor: '#bbb' }}>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
        <div className="column" style={{backgroundColor: '#ccc' }}>
          <h2>Column 3</h2>
          <p>Some text..</p>
        </div>
      </div> 
    );  
  };  
  
  export default UserPage  