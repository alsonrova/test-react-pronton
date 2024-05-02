import './AccountDelete.css'

function AccountDelete() {
  return (
    <div className="account-delete">
        <h2>Delete account</h2>
        <p>
            If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.
        </p>
        <div className="delete-button">
            Yes, Delete my account
        </div>
    </div>
  )
}
export default AccountDelete