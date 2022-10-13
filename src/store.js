// 액션
export const increase = () => ({type: "INCREMENT"});
export const decrease = () => ({type: "DECREMENT"});

// 상태
const initstate = {
    number: 0,
}

// 액션의 결과를 걸러내는 친구
const reducer = (state = initstate, action) => { // 상태값이 0
    switch (action.type) { // 액션 타입이 무엇이라면
        case"INCREMENT": // 무엇 = INCREMENT
            // ** return되면 그걸 호출한 쪽에서 받는게 아니라 return되는 순간 ui변경
            return {number: state.number + 1}; // 1을 더해줘

        case"DECREMENT": // 무엇 = DECREMENT
            return {number: state.number - 1}; // 1을 빼줘

        default:
            return state;

    }
}

export default reducer; // 외부에서 쓸 수 있는 것은 reducer