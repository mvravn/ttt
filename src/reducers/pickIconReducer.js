const initState = {
  icon: 'X'
}

/* Kunne godt bruge et tjek for, om spillet kører - i så fald skal man ikke kunne skifte */

const pickIconReducer = (state = initState, action) => {
  console.log('Action: ', action);
  if (action.type === 'CHANGE_ICON') {
    let newIcon = '';
    if (action.icon === 'X') { newIcon = 'O' }
    else { newIcon = 'X' }
  
    return {
      ...state,
      icon: newIcon
    }
  }
  return state;
}

export default pickIconReducer