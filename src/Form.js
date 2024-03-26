// Madlibs Form 

import React, { useState } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';


function MadlibsForm({ onSubmit }) {

    const [ inputs, setInputs ] = useState({
        noun: '',
        nounTwo: '',
        adjective: '',
        color: ''
    });

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setInputs( prevInputs => ({
            ...prevInputs,
            [ name ]: value
        }));
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        onSubmit( inputs );
    };

    return(
        <Grid centered column = { 2 }> 
            <Grid.Column>
                <Form  onSubmit = { handleSubmit }> 
                    <Form.Field>
                        <input 
                            type = 'text'
                            name = 'noun'
                            placeholder = 'Noun'
                            value = { inputs.noun }
                            onChange = { handleChange }>
                        </input>
                    </Form.Field>
                    <Form.Field> 
                        <input
                            type = 'text'
                            name = 'nounTwo'
                            placeholder = 'Noun'
                            value = { inputs.nounTwo }
                            onChange = { handleChange }>
                        </input>
                    </Form.Field>
                    <Form.Field>
                        <input 
                            type = 'text'
                            name = 'adjective'
                            placeholder = 'Adjective'
                            value = { inputs.adjective }
                            onChange = { handleChange }>
                        </input>
                    </Form.Field>
                    <Form.Field>
                        <input 
                            type = 'text'
                            name = 'color'
                            placeholder = 'Color'
                            value = { inputs.color }
                            onChange = { handleChange }>
                        </input>
                    </Form.Field>
                    <Button type = 'submit'> Create </Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default MadlibsForm;


