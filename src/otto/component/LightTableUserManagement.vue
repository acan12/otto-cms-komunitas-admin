<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="users">
            

            <el-table-column label="Member ID"
                             prop="member_id"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Username"
                             prop="username"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Email"
                             prop="email"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Role User"
                             prop="role_name"
                             min-width="140px" />
    
            <el-table-column label="Action"
                             prop="member_id"
                             min-width="180px">
                <template v-slot="{row}">
                    <b-button href="javascript:;" variant="outline-primary" @click="userManagementDetail(row.member_id)"> Detail</b-button>
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
  import { mapState } from "vuex"

  export default {
    name: 'light-table-user-management',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    computed: {
        ...mapState('users', ['users'])
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods:{
        userManagementDetail: function(){
            this.$router.push({ name: 'user_management_detail'})
        }
    },
    created() {
        this.$store.dispatch("users/GET_USERS")
    }

  }
</script>
