import Header from "../../components/admin/Dashboard/Header/Header";
import SidebarLeft from "../../components/admin/Dashboard/SidebarLeft/SidebarLeft";
import Main from "../../components/admin/Dashboard/Main/Main";
import SidebarRight from "../../components/admin/Dashboard/SideBarRight/SideBarRight";
import Wrapper from "../../components/admin/Dashboard/Wrapper/Wrapper";
import Workspace from "../../components/admin/Dashboard/Workspace/Workspace";

export default function AdminMainPage() {
    
    return (
        <Wrapper>
            <Header style={{position: 'fixed', left: '0', right: '0'}}></Header>
            <Main>
                <SidebarLeft />
                <Workspace />
                <SidebarRight />
            </Main>
        </Wrapper>
    );
}
