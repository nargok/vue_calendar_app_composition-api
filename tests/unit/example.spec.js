import { shallowMount } from '@vue/test-utils';
import HomeComponent from '@/components/HOme.vue';

describe('HelloWorld.vue', () => {
  it('renders text when passed', () => {
    const text = 'ホーム';
    const wrapper = shallowMount(HomeComponent);
    expect(wrapper.text()).toMatch(text);
  });
});
