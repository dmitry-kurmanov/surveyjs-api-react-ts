export const createNewAction = <T>({ payload, type = 'action-test-type' }: { payload: T, type?: string }) => {
    return { payload, type }
}