
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateInstructorInput {
    exampleField?: Nullable<number>;
}

export interface UpdateInstructorInput {
    id: number;
}

export interface Instructor {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface IQuery {
    instructors(): Nullable<Instructor>[] | Promise<Nullable<Instructor>[]>;
    instructor(id: number): Nullable<Instructor> | Promise<Nullable<Instructor>>;
    helloWorld(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    createInstructor(createInstructorInput: CreateInstructorInput): Instructor | Promise<Instructor>;
    updateInstructor(updateInstructorInput: UpdateInstructorInput): Instructor | Promise<Instructor>;
    removeInstructor(id: number): Nullable<Instructor> | Promise<Nullable<Instructor>>;
}

type Nullable<T> = T | null;
