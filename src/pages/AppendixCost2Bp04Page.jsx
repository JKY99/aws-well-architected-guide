import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP04 — 그룹 및 역할 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>비용 데이터에 대한 적절한 접근을 제공하는 그룹과 역할을 구현합니다. 최소 권한 원칙을 준수하면서 관련 팀에게 필요한 비용 가시성을 제공합니다.</p>
      <h2>원하는 결과</h2>
      <p>팀이 적절한 권한으로 비용 데이터에 접근하고 비용 최적화 활동을 수행할 수 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 사용자가 동일한 수준의 비용 데이터 접근 권한을 갖습니다.</li>
        <li>비용 데이터에 대한 접근이 너무 제한적이어서 팀이 자신의 비용을 확인할 수 없습니다.</li>
        <li>역할 기반 접근 제어 없이 비용 관리 도구에 접근합니다.</li>
        <li>최소 권한 원칙이 적용되지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀이 자신의 비용 데이터에 적절히 접근하여 최적화 활동을 수행합니다.</li>
        <li>비용 데이터의 보안이 유지됩니다.</li>
        <li>책임이 명확하게 분리됩니다.</li>
        <li>셀프 서비스 비용 관리가 가능합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>IAM 역할 정의: 비용 관리 도구에 대한 역할 기반 접근 제어를 구현합니다.</li>
        <li>읽기 전용 접근: 대부분의 팀에게 자신의 비용 데이터에 대한 읽기 전용 접근을 제공합니다.</li>
        <li>관리자 권한: 비용 관리 설정 변경은 제한된 관리자 그룹에게만 허용합니다.</li>
        <li>크로스 계정 접근: AWS Organizations를 통해 여러 계정의 비용 데이터에 접근합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Identity and Access Management (IAM)</li>
        <li>AWS Organizations</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Single Sign-On</li>
      </ul>
      <PageNav />
    </article>
  );
}
