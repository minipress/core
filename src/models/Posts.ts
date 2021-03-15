import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Post extends BaseEntity {

    @Field(type => String)
    @Column()
    slug: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(type => String)
    @Column()
    uuid: string;

    @Field(type => String)
    @Column()
    author: string;

    @Field(type => String)
    @Column()
    title: string;

    @Field(type => String)
    @Column()
    html: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    comment_id?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    feature_image?: string;

    @Field(type => Boolean)
    @Column()
    featured: boolean = false;

    @Field(type => String)
    @Column()
    visibility: string = "public";

    @Field(type => Number)
    @Column()
    created_at: number;

    @Field(type => Number, { nullable: true })
    @Column({ nullable: true })
    updated_at?: number;

    @Field(type => Number, { nullable: true })
    @Column({ nullable: true })
    published_at?: number;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    custom_excerpt?: string;

    @Field(type => String)
    @Column()
    url: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    excerpt?: string;

    @Field(type => Number, { nullable: true })
    @Column({ nullable: true })
    reading_time?: number;

    @Field(type => Boolean, { nullable: true })
    @Column({ nullable: true })
    access?: boolean;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    og_image?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    og_title?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    og_description?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    twitter_title?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    twitter_image?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    twitter_description?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    meta_title?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    meta_description?: string;

    @Field(type => String, { nullable: true })
    @Column({ nullable: true })
    email_subject?: string;
}
