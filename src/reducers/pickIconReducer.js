const initState = {
  iconChoice: [{icon: 'X'}]
}

const pickIconReducer = (state = initState, action) => {
  console.log('Action: ', action);
  if (action.type === 'CHANGE_ICON') {
    let newIcon = state;
    if (action.icon === 'X') { newIcon.icon = 'O' }
    else { newIcon.icon = 'X' }
    return {
    ...state,
    icon: newIcon
    }
  }
  return state
}

export default pickIconReducer