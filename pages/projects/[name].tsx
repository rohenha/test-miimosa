import { queryContent } from "Lib";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import slugify from "slugify";
import { withTranslation } from "i18n";
import { IEquipePage } from "Interfaces";
import { PercentComponent } from "Components";

import "./name.module.sass";

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const query = `query HomePage {
        projects{
            title
            id
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
    const project = data.projects.filter((project: any) => {
        return slugify(project.title, { lower: true }) === ctx.params?.name
    })
    if (project.length === 0) {
        const { res } = ctx;
        res.setHeader("location", "/404");
        res.statusCode = 302;
        res.end();
        return {
            props: {}
        };
    }
    return {
        props: {
            project: project[0]
        }
    };
}

const Projectpage = ({ project }: IEquipePage) => {
    return (
        <div className="project">
            <div className="container">
                <h1>{project.title}</h1>
                <div className="section__image"></div>
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <div className="project__avancement">
                            <PercentComponent collected={project.collected} target={project.target} text={"réussi"} />
                            <p>{project.collected}€ / {project.target}€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation('common')(Projectpage)