export const base_url = process.env.REACT_APP_API_BASE_URL
// export const base_url = "http://localhost:8000/api/"

// User endpoints
export const Registeruserurl = base_url + "users/register";
export const Verifyregistercodeurl = base_url + "users/validateregistercode";
export const Resendregistercodeurl = base_url + "users/resendregistercode";
export const Loginuserurl = base_url + "users/login";
export const Fetchuserprofileurl = base_url + "users/fetchuser-profile";
export const Logoutuserurl = base_url + "users/logoutuser";
export const Updateuserinfourl = base_url + "users/updateuserinfo";
export const Syncuserdataurl = base_url + "users/syncuserdetails";
export const Sendrequestpassurl = base_url + "users/requestpasschange";
export const Validatepasscodeurl = base_url + "users/validateresetcode";
export const Resetpassurl = base_url + "users/resetpassword";
export const Deleteaccounturl = base_url + "users/deleteaccount";
export const Restoreaccounturl = base_url + "users/restoreuser";
export const Updateuserprofileurl = base_url + "users/update-user-profile";
export const Uploadprofilepicurl = base_url + "users/uploadpic"
export const Fetchassetsurl = base_url + "users/assets/"
export const Fetchuserstatsurl = base_url + 'users/fetchuser-stats'
export const Fetchdashboardstatsurl = base_url + "users/fetch-dashboard-stats"


/*Inbox*/
export const Fetchmessagesurl = base_url + "users/fetchmessages"
export const Readmessageurl = base_url + "users/readmessage"


//events
export const Posteventurl = base_url + "events/post-event";
export const Fetcheventsurl = base_url + "events/fetch-events"
export const Bookeventurl = base_url + "events/book-event"
export const Fetcheventbookingsurl = base_url + "events/fetch-event-bookings"
export const Deleteeventurl = base_url + "events/delete-event"
export const Deleteeventimageurl = base_url + "events/delete-event-image"

//voting
export const Postvotingprogramurl = base_url + "voting/post-voting-program"
export const Fetchvotingprogramsurl = base_url + "voting/fetch-voting-programs"
export const Deletevotingprogramsurl = base_url + "voting/delete-voting-programs"
export const Castvoteurl = base_url + "voting/cast-vote"
export const Fetchvotingpaymentsurl = base_url + "voting/fetch-voting-payments"


//payment
export const Makepaymenturl = base_url + "v1/pesapalipn/makepaymetrequest"
export const Checkpaymentstatusurl = base_url + 'v1/pesapalipn/checktransactionstatus'
export const Fetchtransactionsurl = base_url + "users/fetch-transactions"


//admin
export const Fetchgeneralwalleturl = base_url + "admin/fetch-general-wallet"















