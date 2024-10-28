import {Select} from "antd"
const {Option}= Select
const DropdownMenu=({group,order,onGroupingChange,onOrderingChange})=>{
    return (
        <div style={{ padding: '10px 20px', backgroundColor: '#F8F8F8', borderRadius: '5px',boxShadow:"1px 1px 2px #888888"}}>
          <div style={{ marginBottom: '15px' }}>
            <span style={{ marginRight: '10px' }}>Grouping</span>
            <Select defaultValue={group} style={{ width: 120 }} onChange={onGroupingChange}>
              <Option value="Status">Status</Option>
              <Option value="User">User</Option>
              <Option value="Priority">Priority</Option>
            </Select>
          </div>
          <div>
            <span style={{ marginRight: '10px' }}>Ordering</span>
            <Select defaultValue={order} style={{ width: 120 }} onChange={onOrderingChange}>
              <Option value="Priority">Priority</Option>
              <Option value="Title">Title</Option>
            </Select>
          </div>
        </div>
      );
}
export default DropdownMenu