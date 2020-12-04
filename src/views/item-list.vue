<template>
    <div>
        <ItemInput />
        <item v-for="item in renderList" :id="item.id" :title="item.title" :status="item.status" :key="item.id"></item>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import ItemInput from '@/components/ItemInput.vue';
import Item from '@/components/Item.vue';
import {mapGetters} from 'vuex';

@Component({
    components: {
        ItemInput,
        Item,
    },
    computed: {
        ...mapGetters([
            'allTodoList',
            'activeTodoList',
            'clearTodoList',
        ]),
    },
})
export default class ItemList extends Vue {
    renderList: any[] = [];
    clearTodoList!: any[];
    activeTodoList!: any[];
    allTodoList!: any[];

    created() {
        this.$store.dispatch('initData');
    }

    initRenderList(status: string) {
        if (!status) {
            this.renderList = this.allTodoList;
        } else if (status === 'active') {
            this.renderList = this.activeTodoList;
        } else if (status === 'clear') {
            this.renderList = this.clearTodoList;
        }
    }

    @Watch('$route.params.status')
    routeUpdate(newValue: string) {
        this.initRenderList(newValue);
    }

    @Watch('$store.state.todoList', {deep: true})
    statusUpdate() {
        const status: string = this.$route.params.status;
        this.initRenderList(status);
    }

}
</script>