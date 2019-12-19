// Unit test of BlogPage.vue
// Run from console with 'npm run test:unit'

import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import BlogPage from '@/components/pages/BlogPage.vue'

describe('BlogPage.vue', () => {
    let post = {
        id: 3,
        title: 'Game of Thrones',
        date: 'September 23, 2019',
        content:
            'Finally saw the end of Game of Thrones. Kind of a downer.',
        categories: ['television', 'game of thrones']
    }
    it('displays a blog post page', () => {
    // for VueEx, use 'mount' instead of 'shallowMount'
        const wrapper = mount(BlogPage, {
            
        //computed property to satisfy VueEx store for testing purposes.
            computed: {
                post: function() {
                    return post
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

    expect(wrapper.text()).to.include("Game of Thrones");
    expect(wrapper.text()).to.include(post.date);
    expect(wrapper.text()).to.include(post.content);
    expect(wrapper.find('#categories').exists()).to.equal(true);
    // use custom attribute 'data-test' for test 
    expect(wrapper.find('[data-test="home-link"]').exists()).to.equal(true);
    })
})


