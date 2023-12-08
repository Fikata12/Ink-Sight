export const AuthValidationConstants = {
    UsernameMinLength: 5,
    UsernameMaxLength: 16,
    EmailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    PasswordMinLength: 6,
    PasswordMaxLength: 16,
}

export const CommentValidationConstants = {
    CommentMinLength: 1,
    CommentMaxLength: 300
}

export const ReviewValidationConstants = {
    TitleMinLength: 1,
    TitleMaxLength: 100,
    IsbnRegex: /^\d{10}$|^\d{13}$/,
    ReviewMinLength: 100,
    ReviewMaxLength: 600,
    UrlRegex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
}
