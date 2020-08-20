import { queryContent } from "Lib";
import { GetServerSideProps } from "next";
import slugify from "slugify";
import { IHomePage, IProjectHome } from "Interfaces";
import { Link, withTranslation } from "i18n";
import { PercentComponent } from "Components";

import "./index.module.sass";

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `query HomePage {
        projects{
            title
            status
            target
            collected
            user {
                first_name
                last_name
            }
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
        <div className="home">
            <div className="container">
                <h1>Projets</h1>
                <ul className="row">
                    {projects.map((project: IProjectHome, index: number) => (
                        <li className="col-md-4" key={index}>
                            <Link href={"/projects/" + slugify(project.title, { lower: true })}>
                                <a className="home__link">
                                    <div className="section__image"></div>
                                    <div className="home__link__content">
                                        <h2>{project.title}</h2>
                                        <p className="home__link__profile text__home_profile">par {project.user.first_name} {project.user.last_name}</p>
                                        <div className="home__link__details">
                                            <div className="home__link__price">
                                                <PercentComponent collected={project.collected} target={project.target} text={"réussi"} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default withTranslation('common')(Homepage)
