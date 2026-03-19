import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP05 — IP 서브넷 할당</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>VPC와 서브넷에 향후 성장을 수용할 충분한 IP 주소 공간을 계획하고 할당합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 성장에 따른 IP 고갈 없이 확장 가능한 네트워크</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>너무 작은 CIDR 블록</li>
        <li>겹치는 IP 범위</li>
        <li>확장성 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>원활한 확장</li>
        <li>IP 충돌 방지</li>
        <li>간단한 네트워크 관리</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>/16 VPC CIDR 사용 권장</li>
        <li>서브넷별 충분한 주소 공간 할당</li>
        <li>RFC 1918 주소 범위 사용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC</li>
        <li>AWS VPC IP Address Manager (IPAM)</li>
      </ul>
      <PageNav />
    </article>
  );
}
