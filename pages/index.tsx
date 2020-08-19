import { queryContent } from "Lib";
import { GetServerSideProps } from "next";
import slugify from "slugify";
import { IHomePage, IProjectHome } from "Interfaces";
import { Link, withTranslation } from "i18n";

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `query HomePage {
        projects{
            title
        }
    }`;

    const data = await queryContent(query, 10);
    return {
        props: {
            projects: data.projects
        },
    }
}

const Homepage = ({ projects, t }: IHomePage) => {
    return (
        <div>
            {t('hello-world')}
            {projects.map((project: IProjectHome, index: number) => (
                <li key={index}>
                    <Link href={"/projects/" + slugify(project.title, { lower: true })}>
                        <a>{project.title}</a>
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default withTranslation('common')(Homepage)
