// Contacts
export const selectContacts = state => state.contacts.contacts;
export const selectStatus = state => state.contacts.status;

// Filter
export const selectFilter = state => state.filter;

// Auth
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user.name;
export const selectIsLoading = state => state.auth.isLoading;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
