import { shallowMount } from '@vue/test-utils';
import Indecition from '@/components/Indecition'

describe('Indecision component test', () => {
    let wrapper;
    let clgSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ 
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
         })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecition)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('should do match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Write in the input shouldn`t trigger nothing', async () => {
        const input = wrapper.find('input')
        await input.setValue('Unit test')
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        // Espia que el console haya sido llanado
        // expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('Trigger getAnswer when user write ? symbol', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Unit test?')
        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('getAnswer test', async () => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')

    })

    test('Test in getAnswer and api error', async () => {
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('Cannot load api')
    })
})

