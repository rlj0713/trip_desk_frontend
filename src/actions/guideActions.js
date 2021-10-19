export const fetchGuides = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_GUIDES'})
        
        fetch('http://localhost:3000/guides.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_GUIDES', guides: responseJSON })
        })
    }
}

export const deleteGuides = (guideObject) => {
    
    return(dispatch) => {

        fetch(`http://localhost:3000/guides/${guideObject.id}.json`, { method: "DELETE" })

        .then(res => {
            dispatch({ type: 'DELETE_GUIDE', payload: guideObject }) 
        })
        .catch((error) => {
            alert('This guide is on the schedule.  To delete, please remove him/her from the schedule.');
        })
    }
    
}

export const createGuide = (userInput) => {
    let _data = {
        first_name: userInput.first_name,
        last_name: userInput.first_name
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(_data)
    }
    
    return(dispatch) => {
        fetch('http://localhost:3000/guides', configObj)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: 'CREATE_GUIDE', payload: json['data'] }) 
        })
    }
}