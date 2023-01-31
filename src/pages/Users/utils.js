export const getUsersMap = (users) => users.map(({id, email, name, username, website, phone}) => ({
    col1: id,
    col2: email,
    col3: name,
    col4: username,
    col5: website,
    col6: phone
}))