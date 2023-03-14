import {computed, ref} from "vue";

export default function useSortedPosts(posts) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[sortedPosts.value]?.localeCompare(post2[sortedPosts.value]))
    })

    return {
        selectedSort, sortedPosts
    }
}