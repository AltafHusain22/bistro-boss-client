/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { BsFillTrashFill} from 'react-icons/bs';
const MyCart = () => {
	const [ refetch,cart] = useCart()

  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${item._id}`, {
          method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data => {
          if(data.deletedCount > 0){
            refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            
          }
        })
      }
    })
  }

	return (
		<div>
			<h2 className="text-xl text-center"> Total Items : {cart.length}</h2>

	<div className=" ">
  <table className="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Item Image</th>
        <th>Item Name </th>
        <th>Price </th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
     
      {
        cart.map(item => <tr key={item._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.image} />
                </div>
              </div>
            </div>
          </td>
          <td> {item.name }</td>
          <td>${item.price}</td>
          <th>
            <button  onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs"><BsFillTrashFill></BsFillTrashFill></button>
          </th>
        </tr>)
      }
    </tbody>

  </table>
</div>
		</div>
	);
};

export default MyCart;