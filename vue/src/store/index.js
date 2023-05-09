import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [{
    id: 100,
    slug: 'Get information about any CSS property by hovering over it in the Styles pane',
    statue: 'draft',
    image: 'https://www.w3schools.com/html/pic_trulli.jpg',
    description: 'Focus on the important parts of your code by ignoring files or directories that are not relevant to the issue at hand.',
    created_at: '2023-03-31 09:51:54',
    updated_at: '2023-03-31 09:51:54',
    expire_date: '2023-04-31 11:59:00',
    questions: [{
        id: 1,
        type: 'select',
        question: 'where are you from?',
        description: 'Get information about any CSS property by hovering over it in the Styles pane',
        data: {
            options: [
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f3', text: 'USA' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f4', text: 'Insia' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f5', text: 'Germany' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f6', text: 'Italy' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f7', text: 'chaina' },
            ]
        }
    },
    {
        id: 2,
        type: 'checkbox',
        question: 'which language video do you want to see on my channel?',
        description: null,
        data: {
            options: [
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f8', text: 'Java Script' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f9', text: 'PHP' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f10', text: 'python' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f11', text: 'Java' }
            ]
        }
    },
    {
        id: 3,
        type: 'radio',
        question: 'which laravel framework do you love the most?',
        description: null,
        data: {
            options: [
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f12', text: 'Laravel 6' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f13', text: 'Laravel 7' },
                { uuid: 'e58ed763-928c-4155-bee9-fdbaaadc15f14', text: 'Laravel 8' },
            ]
        }
    },
    {
        id: 4,
        type: 'text',
        question: 'what is your favorite youtube channel?',
        description: null,
        data: {}
    },
    {
        id: 5,
        type: 'textarea',
        question: 'what do you think of this channel?',
        description: 'write your honest opinion.every thing is anonymouse',
        data: {}
    }
    ]
}]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        survays: [...tmpSurveys]
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data)
                    return data
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then((response) => {
                    commit('logout')
                    console.log(response)
                })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
});

export default store;