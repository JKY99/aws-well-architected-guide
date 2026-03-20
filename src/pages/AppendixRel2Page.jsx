import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Page() {
  return (
    <article className="doc-content">
      <h1>REL 2 — 네트워크 토폴로지를 어떻게 계획합니까?</h1>

      <p>
        워크로드는 종종 여러 환경에 걸쳐 존재합니다. 여기에는 공개적으로 액세스 가능한 환경과 프라이빗 환경을 포함한
        여러 클라우드 환경, 그리고 기존 데이터 센터 인프라가 포함될 수 있습니다.
        계획에는 시스템 내 및 시스템 간 연결, 공용 IP 주소 관리, 사설 IP 주소 관리, 도메인 이름 확인 등의
        네트워크 고려 사항이 포함되어야 합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/reliability/rel2/bp01">REL02-BP01: 워크로드 공개 엔드포인트에 고가용성 네트워크 연결 사용</Link></strong><br />
          <span>공개 엔드포인트에 대한 고가용성 네트워크 연결을 구축하여 연결 손실로 인한 가동 중단을 줄입니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel2/bp02">REL02-BP02: 클라우드와 온프레미스 환경의 프라이빗 네트워크 간 이중화 연결 프로비저닝</Link></strong><br />
          <span>클라우드와 온프레미스 환경 간 연결에 중복성을 구현하여 연결 복원력을 달성합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel2/bp03">REL02-BP03: IP 서브넷 할당이 확장 및 가용성을 고려하도록 보장</Link></strong><br />
          <span>VPC IP 주소 범위가 향후 확장과 가용 영역별 서브넷 할당을 고려할 만큼 충분히 큰지 확인합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel2/bp04">REL02-BP04: 다대다 메시보다 허브 앤 스포크 토폴로지 선호</Link></strong><br />
          <span>여러 프라이빗 네트워크를 연결할 때 메시 토폴로지 대신 허브 앤 스포크 토폴로지를 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/reliability/rel2/bp05">REL02-BP05: 연결된 모든 프라이빗 주소 공간에서 겹치지 않는 사설 IP 주소 범위 적용</Link></strong><br />
          <span>피어링, Transit Gateway, VPN으로 연결된 VPC 간에 IP 주소 범위가 겹치지 않도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
