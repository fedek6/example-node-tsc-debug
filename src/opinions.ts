export const iLike = (subject: string): string => {
    return `I like ${subject}!`;
}

export const iLikeMultipleItems = (...subject: string[]): string => {
    return "I like " + subject.reduce((total, current) => `${total} and ${current}`) + "!";
}
