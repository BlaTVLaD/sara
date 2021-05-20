import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
          name: '',
          age: '',
          volume: '',
          skills: '',
          drive: '',
          gear: '',
          vin: '',
          phone: '',
          about: ''

      },

        skillOptions: ["Бензин", "Дизель", "Газ", "Гибрид"],
        driveOptions: ["Передний", "Задний", "Полный"],
        gearOptions: ["Механика", "Автомат", "Робот", "Вариатор"]
    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleAge(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, age: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, skills: newSelectionArray }
      })
      )
}

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('wladdemidovich1998@gmail.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          age: '',
          volume: '',
          skills: '',
          drive: '',
          gear: '',
          vin: '',
          phone: '',
          about: ''
        },
      })
  }

  render() {
    return (
    
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'Автомобиль'}
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'VW Polo седан'}
                   handleChange = {this.handleInput}
                   
                   /> {/* название автомобиля */}


          <Input inputType={'number'} 
                name={'age'}
                 title= {'Год выпуска'}
                 value={this.state.newUser.age} 
                placeholder = {'2013'}
                 handleChange={this.handleInput} /> {/* Age */}


            <Input inputType={'text'}
                   title= {'Объем двигателя'}
                   name= {'volume'}
                   value={this.state.newUser.volume}
                   placeholder = {'1.6'}
                   handleChange = {this.handleInput}/>

            <Select
                title={"Вид топлива"}
                name={"skills"}
                options={this.state.skillOptions}
                Value={this.state.newUser.skills}
                placeholder={"Виды топлива"}
                handleChange={this.handleInput}
            />{" "}

            <Select
                title={"Привод"}
                name={"drive"}
                options={this.state.driveOptions}
                Value={this.state.newUser.drive}
                placeholder={"Виды приводов"}
                handleChange={this.handleInput}
            />{" "}



            <Select
                title={"Коробка"}
                name={"gear"}
                options={this.state.gearOptions}
                Value={this.state.newUser.gear}
                placeholder={"Виды коробок"}
                handleChange={this.handleInput}
            />{" "}


          <Input inputType={'text'}
                  title={'Vin код автомобиля'}
                  name={'vin'}
                  value = {this.state.newUser.vin}
                  placeholder = {'XW8ZZZ61ZFG029046'}
                  handleChange = {this.handleInput}
                  /> {/* Age Selection */}

            <Input inputType={'text'}
                   title={'Телефон для связи'}
                   name={'phone'}
                   value = {this.state.newUser.phone}
                   placeholder = {'88005553535'}
                   handleChange={this.handleInput}
            /> {/* Phone */}


          <TextArea
            title={'Что нужно?'}
            rows={10}
            value={this.state.newUser.about}
            name={'currentPetInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Фильтра: масляный, салонный, воздушный; Масло 5w40; Колодки передние '} />{/* About you */}

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;