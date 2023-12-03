import { shallowMount } from "@vue/test-utils";
import Indecition from '@/components/Indecition'

describe('Indecision component test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Indecition)
    })

    test('should do match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})

