import { queryContent } from "Lib";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import slugify from "slugify";
import { withTranslation } from "i18n";
import { IEquipePage } from "Interfaces";

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const query = `query HomePage {
        projects{
            title
            id
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

const Projectpage = ({ project, t }: IEquipePage) => {
    return (<div><p>{JSON.stringify(project, null, 2)}</p></div>);
};

export default withTranslation('common')(Projectpage)