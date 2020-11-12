<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="users">
            

            <el-table-column label="Member ID"
                             prop="id"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Username"
                             prop="username"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Status"
                             min-width="170px"
                             prop="status">
            
            </el-table-column>

            <el-table-column label="Email"
                             prop="email"
                             min-width="200px" />
    

            <el-table-column label="Phone"
                             prop="phone"
                             min-width="180px" />

            <el-table-column label="Action"
                             prop="id"
                             min-width="250px">

                <template v-slot="{row}">
                    <b-button href="javascript:;" variant="outline-primary" @click="userDetail(row.id)"> Detail</b-button>
                </template>

                
            </el-table-column>
        
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
import { Table, TableColumn} from 'element-ui'

import { mapState, mapstate } from 'vuex'



export default {
    name: 'light-table-user',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapState('users', ['users'])
    }, 
    props: {
        tableTitle: String,
        tableData: ['table-data']
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods:{
        userDetail: function(){
            this.$router.push({ name: 'user_detail'})
        }
    },
    created() {
        this.$store.dispatch('users/GET_USERS')
    }
}
</script>
