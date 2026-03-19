import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Page() {
  return (
    <article className="doc-content">
      <h1>REL 2 — 네트워크 토폴로지를 어떻게 계획합니까?</h1>

      <p>
        온프레미스와 클라우드 환경을 연결하는 네트워크 토폴로지를 계획하여
        고가용성, 보안, 확장성을 갖춘 네트워크 기반을 구축합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>REL02-BP01:</strong> 가용 영역과 리전 사용<br />
          <span>여러 가용 영역(AZ)에 리소스를 분산하여 단일 AZ 장애에 대한 복원력을 확보합니다.</span>
        </li>
        <li>
          <strong>REL02-BP02:</strong> 고가용성 연결 선택<br />
          <span>AWS Direct Connect, VPN을 이중화하여 온프레미스와 클라우드 간 연결의 고가용성을 확보합니다.</span>
        </li>
        <li>
          <strong>REL02-BP03:</strong> 적절한 크기의 전용 연결 또는 VPN 사용<br />
          <span>워크로드 대역폭 요구사항에 맞는 연결 유형과 용량을 선택합니다.</span>
        </li>
        <li>
          <strong>REL02-BP04:</strong> 단일 장애 지점 방지<br />
          <span>중요한 연결 경로에 중복성을 추가하여 단일 장애 지점을 제거합니다.</span>
        </li>
        <li>
          <strong>REL02-BP05:</strong> IP 서브넷 할당<br />
          <span>VPC와 서브넷에 충분한 IP 주소 공간을 할당하여 향후 성장을 수용합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
