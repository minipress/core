import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Post extends BaseEntity {

    @Field(() => String)
    @Column()
    slug: string;

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    uuid: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    html: string;

    @Field(() => String)
    @Column()
    comment_id: string;

    @Field(() => String)
    @Column()
    feature_image: string;

    @Field(() => Boolean)
    @Column()
    featured: boolean;

    @Field(() => String)
    @Column()
    visibility: string;

    @Field(() => Number)
    @Column()
    created_at: number;

    @Field(() => Number)
    @Column()
    updated_at: number;

    @Field(() => Number)
    @Column()
    published_at: number;

    @Field(() => String)
    @Column()
    custom_excerpt: string;

    @Field(() => String)
    @Column()
    url: string;

    @Field(() => String)
    @Column()
    excerpt: string;

    @Field(() => Number)
    @Column()
    reading_time: number;

    @Field(() => Boolean)
    @Column()
    access: boolean;
    
    @Field(() => String)
    @Column()
    og_image: string;

    @Field(() => String)
    @Column()
    og_title: string;

    @Field(() => String)
    @Column()
    og_description: string;

    @Field(() => String)
    @Column()
    twitter_title: string;

    @Field(() => String)
    @Column()
    twitter_image: string;

    @Field(() => String)
    @Column()
    twitter_description: string;

    @Field(() => String)
    @Column()
    meta_title: string;

    @Field(() => String)
    @Column()
    meta_description: string;

    @Field(() => String)
    @Column()
    email_subject: string;
}
